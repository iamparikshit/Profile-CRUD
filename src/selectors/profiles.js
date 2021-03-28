export default(profiles,{text}) =>{
    console.log('Profiles', profiles)
    console.log('text', text)
    return profiles.filter((profile)=>{
        const textMatched = profile.name.toLowerCase().includes(text.toLowerCase())

        return textMatched 
    }).sort((a,b)=>{
        
            return a.createdAt < b.createdAt ? 1 : -1
        
    })
}