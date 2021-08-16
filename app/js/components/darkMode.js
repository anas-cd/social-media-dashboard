mainvue.component('dark-mode', {
    template: 
    /* html */
    `
    <label class="switch" for="themes">
        Dark Mode
        <input type="checkbox" v-model="checked" id="themes">
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
    },methods: {
        preferedtheme() {


            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                // this.theme.new = 'dark-theme' 
                // this.theme.old = 'light-theme' 
                // this.$emit('switch-theme', this.theme)
                document.getElementById("checkbox").checked = true;
            }else {
                // this.theme.new = 'light-theme'
                // this.theme.old = 'dark-theme'
                // this.$emit('switch-theme', this.theme)
            }


        }
    },
    beforeMount() {
        this.preferedtheme()
    }
})