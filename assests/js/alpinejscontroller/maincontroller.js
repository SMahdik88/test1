document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => (


        {
            message: 'I Love Programming',
            names: [Mahdi, Ali, Mohammad],
            testFunc(){  
                alert(this.message)
            }
        }
    ))
})