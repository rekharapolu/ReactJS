import React from 'react'

const Studentdata = () => {
    let Data=[
        {
            sname:"Rekha",
            scontact:9059836082,
            isplaced:true
        },
        {
            sname:"Gowthami",
            scontact:6985642125,
            isplaced:false
        },
        {
            sname:"Ramu",
            scontact:9492193382,
            isplaced:false
        },
        {
            sname:"Chinna",
            scontact:6303589383,
            isplaced:true
        }
    ]

    return(
        <>
        {
            Data.map((student)=>{
                let{sname,scontact,isplaced}=student
                return (
                isplaced && (<>
                                <h1>{sname}</h1>
                                <h1>{scontact}</h1>
                            </>))
            })
        }
        </>
    )

}

export default Studentdata