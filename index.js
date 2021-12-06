import '@github/time-elements/dist/local-time-element'

for (const elem of document.querySelectorAll('.year-current')) {
    elem.setAttribute('datetime', new Date().toISOString())
}
