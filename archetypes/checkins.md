---
{{- $dateString := now.Format "2006-01-02-" -}}
{{- $newTitle := replace .Name $dateString "" }}
title: {{ upper $newTitle }}
date: {{ .Date }}
tags: 
  - "trig point"
lat: 
long: 
tp: {{ replace $newTitle "-" " " }}
---
[ {{- upper $newTitle -}} ](http://trigpointing.uk/trig/ {{- replace $newTitle "tp" "" -}} )
