const style = "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 "

export const InputBox = [
    {   input:"input",
        key:"Nama Lengkap",
        body:{
            name:"name",
            type: "text",
            class: style,
            placeholder: "John Doe",
        }
    },
    {   input:"input",
        key:"Umur",
        body:{
            name:"age",
            type: "number",
            class: style,
            placeholder: "20",
        }
    },
    {   input:"input",
        key:"Tinggi badan (cm)",
        body:{
            name:"height",
            type: "number",
            class: style,
            placeholder: "150",
        }
    },
    {   input:"input",
        key:"Berat Badan (kg)",
        body:{
            name:"weight",
            type: "number",
            class: style,
            placeholder: "50",
        }
    },
    {   input:"select",
        key:"Jenis Kelamin (1: Perempuan, 2:Laki-laki)",
        body:{
            name:"gender",
            type: "",
            class: style,
            placeholder: "",
        },
        option: [1, 2]
    },
    {   input:"input",
        key:"Tekanan Sistole",
        body:{
            name:"ap_hi",
            type: "number",
            class: style,
            placeholder: "80",
        }
    },
    {   input:"input",
        key:"Tekanan Diastole",
        body:{
            name:"ap_lo",
            type: "number",
            class: style,
            placeholder: "130",
        }
    },
    {   input:"select",
        key:"Tingkat Kolestrol (1:Normal, 2:Above Normal, 3:Well Above Normal)",
        body:{
            name:"cholestrol",
            type: "",
            class: style,
            placeholder: "",
        },
        option: [1, 2, 3]
    },
    {   input:"select",
        key:"Tingkat Glukosa (1:Normal, 2:Above Normal, 3:Well Above Normal)",
        body:{
            name:"gluc",
            type: "",
            class: style,
            placeholder: "",
        },
        option: [1, 2, 3]
    },
    {   input:"select",
        key:"Perokok Aktif?",
        body:{
            name:"smoke",
            type: "",
            class: style,
            placeholder: "",
        },
        option: ['true', 'false']
    },
    {   input:"select",
        key:"Alkoholik?",
        body:{
            name:"alco",
            type: "",
            class: style,
            placeholder: "",
        },
        option: ['true', 'false']
    },
    {   input:"select",
        key:"Aktif secara fisik?",
        body:{
            name:"active",
            type: "",
            class: style,
            placeholder: "",
        },
        option: ['true', 'false']
    },
    {   input:"select",
        key:"Ada riwayat penyakit cardiovaskular?",
        body:{
            name:"cardio",
            type: "",
            class: style,
            placeholder: "",
        },
        option: ['true', 'false']
    },
]