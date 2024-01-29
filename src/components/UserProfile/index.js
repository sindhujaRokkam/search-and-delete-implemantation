import './index.css'

const UserProfile = props => {
  const {userDetails, onDeleteUser} = props
  const {uniqueNo, imageUrl, name, role} = userDetails
  const onDelete = () => {
    onDeleteUser(uniqueNo)
  }

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button type="button" className="delete-btn" onClick={onDelete}>
        <img src="" alt="cross" className="delete-img" />
      </button>
    </li>
  )
}
export default UserProfile
