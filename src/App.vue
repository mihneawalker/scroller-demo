<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 phone">

    <div class="flex h-screen flex-col justify-center items-center h-screen w-screen">
      <ul v-chat-scroll class="w-1/2 bg-grey-lightest border border-grey m-0 px-8 py-4 overflow-x-auto un-list" ref="scroller"  style="height: 100vh; width: 100%; padding-bottom: 40px;">
        <transition-group name="fadeUp" tag="ul">
            <li v-for="(message, index) in messages" :key="index" style="margin-bottom: 40px">
                <img :src=message.img style="display: inline-block; width:40px; height: 40px; margin-right: 30px">
                <span>{{ message.msg }}</span>
            </li>
        </transition-group>
      </ul>
      <input v-model="message" class="mt-2 w-1/2 px-3 py-2 border border-grey" type="text" placeholder="Type your message" @keydown.enter="send"/>
    </div>

            </div>    
        </div>
    </div>
</template>

<script>
    import VChatScroll from 'vue-chat-scroll'
    import axios from 'axios'
    export default {
        data() {
            return {
                messages: [
                    {
                        img: 'path to url',
                        msg: 'ce faci?'    
                    },
                    {
                        img: 'path to url',
                        msg: 'mai esti?'    
                    },{
                        img: 'path to url',
                        msg: 'lets be friends'   
                    },
                ],
                loading: true,
                posts: []
            }
        },
        
        directives: {
            VChatScroll
        },
        watch: {
            messages() {

                this.$refs.scroller.scrollTop = this.$refs.scroller.scrollHeight + 10;
            }
        },
        methods: {
            send: function() {
            this.messages.push({
                msg: this.message,
                img: ''
                });
            this.message = ""
            }
        },
        mounted() {
        //     axios.get(`http://jsonplaceholder.typicode.com/posts`)
        //         .then(response => {
        //         // JSON responses are automatically parsed.
        //         this.posts = response.data;
        //         console.log(this.posts);
        //         })
        //         .catch(e => {
        //         this.errors.push(e)
        //         })
         },
    }
</script>

<style>



.phone {
  background-color: green;
  margin: 0;
  height: 100vh;
  flex-grow: 100
  /* width: 100%; */
}

.un-list::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

.unlist {
    color: red;
      margin: 0;
    mask-image: -webkit-gradient(linear, left 50%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
}
</style>
