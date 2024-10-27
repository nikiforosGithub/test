import ProgramDetail from "@/mycomps/ProgramDetail";
import {programs} from "@/data/data";


export default function Page(){
    const program = programs[2]
    return(<ProgramDetail program={program}/>)
}