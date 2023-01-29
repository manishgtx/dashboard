import React from 'react'
import { AiFillAndroid , AiFillApple } from 'react-icons/ai'
const Row = ({android_churn,android_install,android_uninstall,created_At,ios_churn,ios_uninstall,totalchurn,totalinstall,totaluninstall}) => {
    let date = new Date(created_At).toLocaleDateString()
    return (
    <tr className='row'>
        <td className="date">{date}</td>
        <td className="installs">{android_install}</td>
        <td className="platform">
            <div className="android">
            <span>
                <AiFillAndroid/>
            </span>
                <p>{android_install}</p>
            </div>
            <div className="ios">
                <span>
                    <AiFillApple />
                </span>
                <p>5</p>
            </div>
        </td>
        <td className="uninstalls">{totaluninstall}</td>
        <td className="platform">
            <div className="android">
                <span>
                    <AiFillAndroid/>
                </span>
                <p>{android_uninstall}</p>
            </div>
            <div className="ios">
            <span>
                <AiFillApple />
            </span>
                <p>{ios_uninstall}</p>
            </div>
        </td>
        <td className='churn-rate'>{totalchurn}%</td>
        <td className="platform">
            <div className="android">
                <span>
                    <AiFillAndroid/>
                </span>
                <p>{ios_churn}%</p>
            </div>
            <div className="ios">
                <span>
                    <AiFillApple />
                </span>
                <p>{android_churn}%</p>
            </div>
        </td>
    </tr>
  )
}

export default Row