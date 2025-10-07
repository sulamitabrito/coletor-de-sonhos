// JavaScript leve para o Coletor de Sonhos (usa jQuery do CDN no index.html)
(function($){
  const THEMES = {
    azul: 'from-indigo-950 via-slate-950 to-black',
    noite: 'from-black via-slate-950 to-black'
  };
  function setTheme(name){
    const $b = $('body');
    $b.removeClass(THEMES.azul + ' ' + THEMES.noite);
    $b.addClass(name === 'noite' ? THEMES.noite : THEMES.azul);
    localStorage.setItem('sonhos_theme', name);
    $('#themeName').text(name === 'noite' ? 'Noite profunda' : 'Azul onírico');
  }
  $(function(){
    // tema
    const saved = localStorage.getItem('sonhos_theme');
    setTheme(saved || 'azul');
    $('#toggleTheme').on('click', function(){
      const cur = localStorage.getItem('sonhos_theme') || 'azul';
      setTheme(cur === 'azul' ? 'noite' : 'azul');
    });
    // rolagem suave para o formulário
    $('a[href^="#form"]').on('click', function(e){
      e.preventDefault();
      const $t = $('#form');
      if($t.length){ window.scrollTo({ top: $t.offset().top - 12, behavior: 'smooth' }); }
    });
  });
})(jQuery);
