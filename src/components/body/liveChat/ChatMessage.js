import userIcon from '../../../assets/userIcon.svg'

const ChatMessage = ({ name , message , profileImage}) => {
    return (
        <div className='flex items-center shadow-sm p-2 w-full'> 
            <div className='user-image'>
                <img src={profileImage} alt="user-icon"  className="h-8 w-8" />
            </div>
            <div className='user-message px-3'>
                <span className='font-bold  break-all'>{name}</span>
                <span className='break-all px-3'>{message}</span>
            </div>
             </div>
    )
}

export default ChatMessage;