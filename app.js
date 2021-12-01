const btn_modal = document.querySelector(".modal-btn");
const modal_show = document.querySelector(".modal-box")
const cancel = document.querySelector(".btn-cancel")
const login = document.querySelector(".login")

btn_modal.addEventListener('click', () => {
    // console.log('it just click')
    modal_show.classList.add('open-modal')

})

login.addEventListener('click', () => {
    var user = document.getElementById('user').value
    var psw = document.getElementById('psw').value
    console.log(user, psw)
})

cancel.addEventListener('click', () => {
    modal_show.classList.remove('open-modal')
})