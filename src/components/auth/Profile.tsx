export type ProfileProps = {
    name:string
}

const Profile = ({name}:ProfileProps) =>{
    return ( 
            <>
                <div>Private Profile Component-{name}</div>
            </> 
    );
}
 
export default Profile;