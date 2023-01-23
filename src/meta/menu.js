import { BiUser } from "react-icons/bi"
import { BsCameraVideo } from "react-icons/bs"
import {MdSpaceDashboard} from "react-icons/md"
import {FiAlertTriangle, FiAlertOctagon,FiUserPlus} from 'react-icons/fi'
import {ImStack} from 'react-icons/im'
import { TbMessagesOff } from 'react-icons/tb';
import {RiNotification2Line} from 'react-icons/ri';
export const menu = [
    {id:0,title:"Dashboard",icon:<MdSpaceDashboard />},
    {id:1,title:"WOW Users",icon:<BiUser />},
    {id:2,title:"Video Clips",icon:<BsCameraVideo />},
    {id:3,title:"Reported Content",icon:<FiAlertTriangle />},
    {id:4,title:'Category',icon:<ImStack />},
    {id:5,title:'Info Page',icon:<FiAlertOctagon/> },
    {id:6,title:'FAQ',icon:<TbMessagesOff/>},
    {id:7,title:'Push Notification',icon:<RiNotification2Line/>},
    {id:8,title:'Internal User',icon:<FiUserPlus/> }
]