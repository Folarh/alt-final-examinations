import {ref} from 'vue'

const getData = ()=>{
    const posts = ref([])
    const error = ref(null)

    const load = async ()=>{
        try{
            const res = await fetch ("https://api.github.com/users/FOLARH/repos")
            if  (!res.ok){
                throw new Error('no data available')
            }
            posts.value = await res.json()
            console.log(posts)
        }catch(err){
            error.value = err.message
        }
    }
    return {posts,error, load}

}

export default getData