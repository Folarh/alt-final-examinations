import {ref} from 'vue'
const getPost =  (id)=>{
    const post = ref(null)
    const error = ref(null)

    const load = async ()=>{
        try{
            const res = await fetch ("https://api.github.com/repos/FOLARH/"+ id)
            if  (!res.ok){
                throw new Error('that repository does not exist')
            }
            post.value = await res.json()
            console.log(post)
        }catch(err){
            error.value = err.message
        }
    }
    return {post,error, load}
}

export default getPost