const MyBio = (props) => {
    return (
        <div>
            <h1 className="text-danger">Nama Saya {props.name}</h1>
            <h2>Usia: {props.age}</h2>
        </div>
    )
}

export default MyBio;