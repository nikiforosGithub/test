import ProgramDetail from "@/mycomps/ProgramDetail";
import {programs} from "@/data/data";


export default function Page(){
    const program = programs[0]
    return(<ProgramDetail program={program}/>)
}