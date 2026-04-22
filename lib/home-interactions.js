export function initHomeInteractions() {
'use strict';

  // Scroll reveal (Sarvam exact: IntersectionObserver)
  function initScrollReveal() {
    var els = document.querySelectorAll('[data-section-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-revealed'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    els.forEach(function (el) { observer.observe(el); });
  }

  // Blog grid stagger (Sarvam exact)
  function initBlogGrid() {
    var grid = document.querySelector('[data-blog-grid]');
    if (!grid) return;
    var items = grid.children;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          Array.from(items).forEach(function (item, i) {
            setTimeout(function () {
              item.classList.add('is-revealed');
            }, i * 120);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    observer.observe(grid);
  }

  // Mobile menu
  function initMobileMenu() {
    var btn = document.getElementById('hamburgerBtn');
    var menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      btn.classList.toggle('active');
      menu.classList.toggle('active');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        btn.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  }

  // Smooth scroll
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = this.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  // Header scroll effect (Sarvam exact)
  function initHeaderScroll() {
    var glass = document.querySelector('.header-glass');
    if (!glass) return;
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 50) {
        glass.style.backgroundColor = 'rgba(255,255,255,0.85)';
        glass.style.boxShadow = '0 4px 30px rgba(0,0,0,0.06), inset 0 1px 3px rgba(0,0,0,0.04)';
      } else {
        glass.style.backgroundColor = 'rgba(255,255,255,0.55)';
        glass.style.boxShadow = '0 2px 24px rgba(0,0,0,0.02), inset 0 1px 3px rgba(0,0,0,0.04)';
      }
    }, { passive: true });
  }

  // Button gradient follow (Sarvam exact)
  function initBtnGradients() {
    document.querySelectorAll('.btn-sarvam-primary, .btn-sarvam-secondary').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width) * 100;
        var overlay = btn.querySelector('.btn-gradient-overlay, .btn-gradient-overlay-light');
        if (overlay) overlay.style.backgroundPosition = x + '% 0%';
      });
    });
  }

  // Hero parallax — subtle vertical shift only, never change scale
  function initHeroParallax() {
    var grad = document.querySelector('.hero-bg-gradient');
    if (!grad) return;
    window.addEventListener('scroll', function () {
      var y = window.pageYOffset;
      if (y < window.innerHeight) {
        grad.style.transform = 'translateX(-50%) scaleX(1.6) scaleY(1.3) translateY(' + (y * 0.15) + 'px)';
      }
    }, { passive: true });
  }

  // =============================================
  // 3-STEP INTERACTIVE DEMO SEQUENCE
  // =============================================
  function initDemoSequence() {
    var demoWindow = document.getElementById('demoWindow');
    if (!demoWindow) return;

    var pills = document.querySelectorAll('.demo-step-pill');
    var lines = document.querySelectorAll('.demo-step-line');
    var scenes = document.querySelectorAll('.demo-scene');
    var replayWrap = document.getElementById('replayWrap');
    var replayBtn = document.getElementById('replayBtn');
    var running = false;
    var gen = 0; // generation counter — incremented on each run to cancel stale animations

    function isDemoMounted() {
      return !!(demoWindow && document.body.contains(demoWindow));
    }

    // Chat conversation script
    var chatScript = [
      { type: 'user', text: 'What is your refund policy?' },
      { type: 'bot',  text: 'Based on our policy manual, refunds are processed within 5-7 business days for eligible purchases. Please see section 3.2 for full details.' },
      { type: 'user', text: 'Can I get a refund on a custom order?' },
      { type: 'bot',  text: 'Custom orders are non-refundable, but we offer store credit. Would you like to proceed?' },
      { type: 'user', text: 'I need to speak to a manager about this.' },
      { type: 'system', text: 'Intent Detected: Escalation Request. Routing to Live Agent...' }
    ];

    // Ingestion pages
    var ingestPages = [
      { icon: '🏠', url: '/home', bg: '#E8F0FE' },
      { icon: '📋', url: '/pricing', bg: '#EAF2FF' },
      { icon: '❓', url: '/faq', bg: '#E8F5E9' },
      { icon: '📞', url: '/contact', bg: '#FCE4EC' },
      { icon: '📦', url: '/products', bg: '#F3E8FD' },
      { icon: '📄', url: '/refund-policy', bg: '#FFF8E1' },
      { icon: '🛒', url: '/shipping', bg: '#E0F7FA' }
    ];

    function typeText(el, text, speed, cb, myGen) {
      el.textContent = '';
      var i = 0;
      (function next() {
        if (myGen !== gen) return; // stale — abort
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
          setTimeout(next, speed);
        } else if (cb) cb();
      })();
    }

    function setStep(n) {
      pills.forEach(function(p, i) {
        p.classList.remove('active', 'done');
        if (i < n - 1) p.classList.add('done');
        if (i === n - 1) p.classList.add('active');
      });
      lines.forEach(function(l, i) {
        if (i < n - 1) l.classList.add('filled');
        else l.classList.remove('filled');
      });
      scenes.forEach(function(s) { s.classList.remove('active'); });
      var activeScene = document.getElementById('scene-' + n);
      if (!activeScene) return false;
      activeScene.classList.add('active');
      return true;
    }

    function showTypingIndicator(container) {
      var d = document.createElement('div');
      d.className = 'typing-indicator';
      d.innerHTML = '<span></span><span></span><span></span>';
      container.appendChild(d);
      container.scrollTop = container.scrollHeight;
      return d;
    }

    function addMessage(container, msg, cb, myGen) {
      if (myGen !== gen) return;
      // If bot, show typing indicator first
      if (msg.type === 'bot') {
        var ind = showTypingIndicator(container);
        setTimeout(function() {
          if (myGen !== gen) return;
          ind.remove();
          var div = document.createElement('div');
          div.className = 'msg msg-' + msg.type;
          container.appendChild(div);
          typeText(div, msg.text, 18, function() {
            container.scrollTop = container.scrollHeight;
            if (cb) setTimeout(cb, 400);
          }, myGen);
          container.scrollTop = container.scrollHeight;
        }, 1200);
      } else {
        // user or system: just pop in
        setTimeout(function() {
          if (myGen !== gen) return;
          var div = document.createElement('div');
          div.className = 'msg msg-' + msg.type;
          div.style.opacity = '0';
          div.style.transform = 'translateY(8px)';
          div.textContent = msg.text;
          container.appendChild(div);
          requestAnimationFrame(function() {
            div.style.transition = 'all 0.3s ease';
            div.style.opacity = '1';
            div.style.transform = 'translateY(0)';
          });
          container.scrollTop = container.scrollHeight;
          if (cb) setTimeout(cb, 600);
        }, 300);
      }
    }

    function playSequence() {
      if (!isDemoMounted()) return;
      running = true;
      gen++; // cancel any stale animations
      var myGen = gen;
      if (replayWrap) replayWrap.classList.remove('visible');

      // Reset
      var urlTarget = document.getElementById('urlTypeTarget');
      var scanBtn = document.getElementById('scanBtn');
      var ingestBarEl = document.getElementById('ingestBar');
      var ingestPagesEl = document.getElementById('ingestPages');
      var ingestStatusEl = document.getElementById('ingestStatus');
      var chatMsgsEl = document.getElementById('chatMessages');
      if (!urlTarget || !scanBtn || !ingestBarEl || !ingestPagesEl || !ingestStatusEl || !chatMsgsEl) {
        running = false;
        return;
      }
      urlTarget.textContent = '';
      scanBtn.classList.remove('visible');
      ingestBarEl.style.width = '0%';
      ingestPagesEl.innerHTML = '';
      ingestStatusEl.textContent = 'Scanning...';
      ingestStatusEl.style.color = '';
      chatMsgsEl.innerHTML = '';

      // Helper to bail if generation changed
      function stale() { return myGen !== gen || !isDemoMounted(); }

      // ---- STEP 1: Type URL ----
      if (!setStep(1)) {
        running = false;
        return;
      }
      var urlWrap = document.querySelector('.scene-url-input-wrap');
      if (!urlWrap) {
        running = false;
        return;
      }
      urlWrap.classList.add('typing');

      setTimeout(function() {
        if (stale()) return;
        typeText(urlTarget, 'https://yourbusiness.com', 55, function() {
          if (stale()) return;
          urlWrap.classList.remove('typing');
          scanBtn.classList.add('visible');

          // Auto-click scan after a beat
          setTimeout(function() {
            if (stale()) return;
            scanBtn.style.transform = 'scale(0.95)';
            setTimeout(function() {
              if (stale()) return;
              scanBtn.style.transform = '';

              // ---- STEP 2: Ingestion ----
              if (!setStep(2)) {
                running = false;
                return;
              }
              var pageIndex = 0;
              var totalPages = ingestPages.length;

              function addNextPage() {
                if (stale()) return;
                if (pageIndex >= totalPages) {
                  ingestStatusEl.textContent = 'Complete!';
                  ingestStatusEl.style.color = '#138808';
                  setTimeout(function() {
                    if (stale()) return;
                    // ---- STEP 3: Chat ----
                    if (!setStep(3)) {
                      running = false;
                      return;
                    }
                    var msgIndex = 0;
                    function nextMsg() {
                      if (stale()) return;
                      if (msgIndex < chatScript.length) {
                        addMessage(chatMsgsEl, chatScript[msgIndex], function() {
                          msgIndex++;
                          nextMsg();
                        }, myGen);
                      } else {
                        running = false;
                        replayWrap.classList.add('visible');
                      }
                    }
                    setTimeout(nextMsg, 600);
                  }, 800);
                  return;
                }

                var pg = ingestPages[pageIndex];
                var pct = Math.round(((pageIndex + 1) / totalPages) * 100);
                ingestBarEl.style.width = pct + '%';

                var row = document.createElement('div');
                row.className = 'ingest-page-row';
                row.innerHTML = '<div class="ingest-page-icon" style="background:' + pg.bg + '">' + pg.icon + '</div>' +
                  '<span class="ingest-page-url">yourbusiness.com' + pg.url + '</span>' +
                  '<span class="ingest-page-check">\u2713</span>';
                ingestPagesEl.appendChild(row);
                ingestPagesEl.scrollTop = ingestPagesEl.scrollHeight;

                requestAnimationFrame(function() {
                  if (stale()) return;
                  row.classList.add('visible');
                  setTimeout(function() {
                    if (stale()) return;
                    row.querySelector('.ingest-page-check').classList.add('done');
                    pageIndex++;
                    setTimeout(addNextPage, 350);
                  }, 300);
                });
              }

              setTimeout(addNextPage, 500);
            }, 200);
          }, 700);
        }, myGen);
      }, 600);
    }

    // Auto-play on scroll
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          setTimeout(playSequence, 400);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(demoWindow);

    // Replay button
    if (replayBtn) {
      replayBtn.addEventListener('click', function() {
        running = false;
        playSequence();
      });
    }
  }

  // Use case tabs
  function initUseCaseTabs() {
    var tabs = document.querySelectorAll('.uc-tab');
    if (!tabs.length) return;
    var validTabs = ['ecommerce', 'education', 'travel', 'teams'];
    function activateTab(target) {
      if (validTabs.indexOf(target) === -1) return;
      document.querySelectorAll('.uc-tab').forEach(function (t) { t.classList.remove('active'); });
      document.querySelectorAll('.uc-panel').forEach(function (p) { p.classList.remove('active'); });
      var activeTab = document.querySelector('.uc-tab[data-tab="' + target + '"]');
      var panel = document.getElementById('panel-' + target);
      if (activeTab) activeTab.classList.add('active');
      if (panel) panel.classList.add('active');
    }
    function activateTabFromHash() {
      var hash = window.location.hash || '';
      if (hash.indexOf('#use-case-') !== 0) return;
      var target = hash.replace('#use-case-', '');
      activateTab(target);
    }
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = this.getAttribute('data-tab') || '';
        activateTab(target);
        history.replaceState(null, '', '#use-case-' + target);
      });
    });
    document.querySelectorAll('a[href^="#use-case-"]').forEach(function (link) {
      link.addEventListener('click', function () {
        var hash = this.getAttribute('href') || '';
        var target = hash.replace('#use-case-', '');
        activateTab(target);
        history.replaceState(null, '', hash);
      });
    });
    window.addEventListener('hashchange', activateTabFromHash);
    activateTabFromHash();
  }

  // =============================================
  // FAQ — Conversational Cards
  // =============================================
  function initFaqConvo() {
    var questions = document.querySelectorAll('.faq-q');
    if (!questions.length) return;

    questions.forEach(function (q) {
      q.addEventListener('click', function () {
        var answerText = this.getAttribute('data-answer');
        var isOpen = this.classList.contains('open');

        // Close all open answers
        questions.forEach(function (otherQ) {
          otherQ.classList.remove('open');
          var existingA = otherQ.nextElementSibling;
          if (existingA && existingA.classList.contains('faq-a')) {
            existingA.classList.remove('visible');
            setTimeout(function () { existingA.remove(); }, 500);
          }
        });

        if (isOpen) return; // was open, now closed — done

        // Open this one
        this.classList.add('open');

        // Create answer bubble — opposite side of the question
        var answerDiv = document.createElement('div');
        var qIndex = Array.from(questions).indexOf(q);
        var answerSide = (qIndex % 2 === 0) ? 'from-left' : 'from-right'; // odd Q = left, so answer goes right; even Q = right, answer goes left
        answerDiv.className = 'faq-a ' + answerSide;

        // Insert typing indicator first
        answerDiv.innerHTML = '<div class="faq-typing"><span></span><span></span><span></span></div>';
        this.after(answerDiv);

        // Trigger open animation
        requestAnimationFrame(function () {
          answerDiv.classList.add('visible');
        });

        // After a beat, replace typing with actual text (typewriter)
        setTimeout(function () {
          answerDiv.innerHTML = '';
          var i = 0;
          (function typeChar() {
            if (i < answerText.length) {
              answerDiv.textContent += answerText.charAt(i);
              i++;
              setTimeout(typeChar, 12);
            }
          })();
        }, 900);
      });
    });
  }

  function init() {
    initScrollReveal();
    initBlogGrid();
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initBtnGradients();
    initHeroParallax();
    initUseCaseTabs();
    initDemoSequence();
    initFaqConvo();
  }

  init();
}
