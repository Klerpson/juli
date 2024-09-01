---
layout: default
title: "Soy Juli. Y hago páginas web con SEO. Y muchas. Escríbeme"
description: "Hago páginas web y SEO. Este es mi blog personal. Te muestro cómo me gusta trabajar y la manera crear y mejorar páginas web que no vendían nada."
h1: "Soy Juli. Mi profesión es crear o mejorar páginas web de empresas y emprendedores"
hero: "img/juli-desarrollador-web.webp"
alt: "Logo de Juli, desarrollador de páginas web y SEO"
---
## Estos son mis aprendizajes haciendo páginas web que sí producen resultados

Aquí te comparto investigaciones, experiencias, consejos, y más cositas que me encuentro en el camino de mi profesión como consultor SEO y desarrollador web:

<div class="home_gallery">
  {% for principal in site.posts %}
  {% if principal.home %}
  <article class="flow">
    <img src="{{principal.hero}}" alt="{{principal.alt}}">
    <h3>{{principal.h1}}</h3>
{{principal.excerpt}}

👉 <a href="{{principal.url|relative_url}}">Leer más</a>

  </article>
  {% endif %}
  {% endfor %}
</div>

### PD. Abajo te invito a mi newsletter

Te comparto toda las experiencias y lecturas que me ayudan a avanzar y lograr grandes cosas haciendo SEO y páginas web a código.

[☕ Suscríbete a mi newsletter](#cta){:class="boton"}

