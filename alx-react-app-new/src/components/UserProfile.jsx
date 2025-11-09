function UserProfile(props) {
    return (
        <div style={{ border: '1px solid gray', borderRadius: '8px', padding: '15px', margin: '15px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: 'blue', marginBottom: '5px' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
            <p>Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span></p>
        </div>
    );
}

export default UserProfile;