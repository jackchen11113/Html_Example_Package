import Alpine from 'alpinejs'
import mask from '@alpinejs/mask'
import intersect from '@alpinejs/intersect'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import collapse from '@alpinejs/collapse'
import anchor from '@alpinejs/anchor'
import morph from '@alpinejs/morph'

window.Alpine = Alpine
Alpine.plugin(mask)
Alpine.plugin(intersect)
Alpine.plugin(persist)
Alpine.plugin(focus)
Alpine.plugin(collapse)
Alpine.plugin(anchor)
Alpine.plugin(morph)

Alpine.start()