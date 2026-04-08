(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('#site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var guideToggle = document.querySelector('.guide-nav-toggle');
  var guideSidebar = document.querySelector('.guide-sidebar');
  if (guideToggle && guideSidebar) {
    guideToggle.addEventListener('click', function () {
      var isOpen = guideSidebar.classList.toggle('open');
      guideToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var guideGroups = document.querySelectorAll('.guide-nav-group[data-collapsible]');
  var isGuideDesktop = function () {
    return window.matchMedia('(min-width: 981px)').matches;
  };
  var setGroupExpanded = function (group, expanded) {
    var button = group.querySelector('.guide-group-toggle');
    group.classList.toggle('is-collapsed', !expanded);
    if (button) {
      button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }
  };
  if (guideGroups.length) {
    guideGroups.forEach(function (group, index) {
      var button = group.querySelector('.guide-group-toggle');
      if (!button) return;
      button.addEventListener('click', function () {
        var expanded = button.getAttribute('aria-expanded') === 'true';
        setGroupExpanded(group, !expanded);
      });
      setGroupExpanded(group, !isGuideDesktop() || index === 0);
    });
  }

  var sideLinks = document.querySelectorAll('.guide-sidebar a[href^="#"]');
  if (!sideLinks.length) return;

  var sections = Array.prototype.slice.call(sideLinks)
    .map(function (link) {
      var id = link.getAttribute('href').replace('#', '');
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (!sections.length) return;

  var setActive = function () {
    var current = sections[0].id;
    var offset = 130;

    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - offset) {
        current = section.id;
      }
    });

    sideLinks.forEach(function (link) {
      var isActive = link.getAttribute('href') === '#' + current;
      link.classList.toggle('active', isActive);
      if (isActive) {
        var parentGroup = link.closest('.guide-nav-group');
        if (parentGroup) {
          setGroupExpanded(parentGroup, true);
        }
      }
    });
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();
