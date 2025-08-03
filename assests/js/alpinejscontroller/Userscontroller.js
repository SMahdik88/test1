    document.addEventListener('alpine:init', () => {
        Alpine.data('mainData', () => ({
            open: false,
 
            message: 'I love You!',
            names: ['qasem', 'abbas', 'nima'],
            testFunc(){
               alert(this.message)
            }
        }))
    })