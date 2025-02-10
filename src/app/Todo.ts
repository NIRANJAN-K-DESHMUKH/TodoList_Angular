//Model
export class Todo {
    // sno: number | undefined
    // title: string | undefined
    // desc: string | undefined
    // active: boolean | undefined 
    sno: number
    title: string
    desc: string
    active: boolean

    constructor(){
        this.sno = 0
        this.title = "title1"
        this.desc = "desc1"
        this.active = true
    }
}