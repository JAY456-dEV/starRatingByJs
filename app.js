const star = document.querySelectorAll('.fa-star')
const starmain = document.querySelector('.starmain')

const emoji = [
    { '1': "./angry.png" },
    { '2': "./sad.png" },
    { '3': "./confused.png" },
    { '4': "./smile (1).png" },
    { '5': "./smile (2).png" },

]
// console.log(emoji[1][2])
star.forEach((stars, idx) => {
    stars.addEventListener('click', function (e) {
        star.forEach((str, index) => {
            // console.log(idx,index)
            if (idx + 1 > index) { // or //idx >  index - 1
                str.classList.add('active')
                emojiGen(idx)
                // console.log(idx, index - 1)
                // console.log(idx + 1,index)
            } else {
                str.classList.remove('active')
            }
        })
    })
})

const emojiDiv = document.querySelector('.emojidiv')

function emojiGen(idx) {
    emojiDiv.innerHTML = `
    <img src="${emoji[idx][idx + 1]}" alt="" width="100px">
    `
    // console.log(emoji[idx][idx + 1])
}