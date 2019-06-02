var vm = new Vue({
    el: "#app",
    data: {
        text:"",
        notes : "",
        showNotes: true,
        arrNotes: [],
    },
    methods: {
        addNotes() {
            this.arrNotes.unshift(this.notes);
            this.notes = "";
        },
        show() {
            this.showNotes = !this.showNotes
        },
        deleteNotes(event,) {
          event.target.parentNode.remove();
        }
    },

})