import { createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../layout/Mainlayout'
import AddStudent from '../componnets/AddStudent'
import StudentDetail from '../componnets/StudentDetail'
import ViewStudents from '../componnets/ViewStudents'
import Editstudent from '../componnets/EditStudent'

const router = createBrowserRouter([
    {
        path : "/",
        element: <Mainlayout/>,
        children:[
            {path: "addstudents", element: <AddStudent/>},
            {path: "studentdetails/:id", element: <StudentDetail/>},
            {path: "", element: <ViewStudents/>},
            {path: "editstudents/:id", element: <Editstudent/>},

        ]

    }
])

export default router;