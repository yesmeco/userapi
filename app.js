const app = Vue.createApp({
    data() {
        return {
            friends: [],
            persona: {}
        }
    },
    methods: {
        async getUser() {
            const res = await fetch(`https://randomuser.me/api/`);
            const { results } = await res.json();
            this.persona = results;
            this.gender = results[0].gender;
            await this.getCountryFlag()
            this.isReady = true;
            console.log(this.persona)
        },
        addFriend(persona) {

            if (this.friends.find(x => x === persona)) {
                alert("It's your friend already, let's meet new people!")
                this.getUser();
            } else
                this.friends.unshift(persona)


        },
        getCountryFlag() {
            this.natflag = `https://countryflagsapi.com/svg/${this.persona[0].nat}`;
        }
    },
    async mounted() {
        await this.getUser();
    }
});

app.mount('#app');