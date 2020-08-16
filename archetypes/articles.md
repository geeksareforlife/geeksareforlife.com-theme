---
{{- $dateString := now.Format "2006-01-02-" -}}
{{- $newTitle := replace .Name $dateString "" }}
author: <Delete to use Site Author>
title: {{ replace $newTitle "-" " " |  title }}
date: {{ .Date }}
thumb: "/images/year/month/image.png"
summary: "Short description, or use <!--more--> in the text"
slug: "{{ lower $newTitle }}"
tags: 
  - tag
menu:
  main:
    parent: 'posts'
draft: true
---
