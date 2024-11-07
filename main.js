let firstNote = document.getElementById('note-1')
let secondNote = document.getElementById('note-2')
let thirdNote = document.getElementById('note-3')

let firstNoteIcons = document.getElementById('note-1-icons')
let secondNoteIcons = document.getElementById('note-2-icons')
let thirdNoteIcons = document.getElementById('note-3-icons')

let firstNoteText = document.getElementById('note-1-text')
let secondNoteText = document.getElementById('note-2-text')
let thirdNoteText = document.getElementById('note-3-text')

let firstNoteCheckbox = document.getElementById('note-1-checkbox')
let secondNoteCheckbox = document.getElementById('note-2-checkbox')
let thirdNoteCheckbox = document.getElementById('note-3-checkbox')

firstNote.addEventListener('mouseenter', () => {firstNoteIcons.style.opacity = 1;})
secondNote.addEventListener('mouseenter', () => {secondNoteIcons.style.opacity = 1;})
thirdNote.addEventListener('mouseenter', () => {thirdNoteIcons.style.opacity = 1;})

firstNote.addEventListener('mouseleave', () => {firstNoteIcons.style.opacity = 0;})
secondNote.addEventListener('mouseleave', () => {secondNoteIcons.style.opacity = 0;})
thirdNote.addEventListener('mouseleave', () => {thirdNoteIcons.style.opacity = 0;})

firstNoteCheckbox.addEventListener('click', () => {
  if(firstNoteCheckbox.checked){
    firstNoteText.classList.add('selected')
  } else {
    firstNoteText.classList.remove('selected')
  }
})

secondNoteCheckbox.addEventListener('click', () => {
  if(secondNoteCheckbox.checked){
    secondNoteText.classList.add('selected')
  } else {
    secondNoteText.classList.remove('selected')
  }
})

thirdNoteCheckbox.addEventListener('click', () => {
  if(thirdNoteCheckbox.checked){
    thirdNoteText.classList.add('selected')
  } else {
    thirdNoteText.classList.remove('selected')
  }
})