mainvue.component('dark-mode', {
    template: 
    /* html */
    `
    <label class="switch">
        <input type="checkbox" v-model="checked">
        <span class="slider round"></span>
    </label>
    
    `,
    data() {
        return{
            checked: false,
            theme: {
                new: 'light-theme',
                old: 'dark-theme'
            }
        }
    }, 
    watch: {
        checked(checkNew) {
             

            if (checkNew) {
                this.theme.new = 'dark-theme' 
                this.theme.old = 'light-theme' 
            }else {
                this.theme.new = 'light-theme'
                this.theme.old = 'dark-theme'
            }
            

            this.$emit('switch-theme', this.theme)
        }
    }
})