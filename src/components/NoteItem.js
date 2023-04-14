export default function NoteItem(props) {



    const { title, description, id, tag,bcolour, handleEdit, currentNote, handleDelete, onChange, saveChanges, date } = props;
    return (
        <>
            <div className='col-md-4 my-4 d-flex justify-content-center'>
            

                <div className="card " style={{
                    width: '300px',
                    borderRadius: '20px',
                    backgroundColor: bcolour
                }} >

                 <span className="badge bg-danger">{tag===''||tag==='General'?'':tag}</span> 

                    <div className="card-body ">
                    
                        <h5 className="card-title">{title.toUpperCase()}</h5>
                        <p className="card-text" style={{fontFamily:'Fuzzy Bubbles'}}>{description}</p>
                        <i className="fa-solid fa-trash-can mx-3" id="634e4f6464a21f3bcfd0d579" onClick={() => handleDelete(id)}></i>
                        <i className="fa-regular fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(id)}> </i>
                        <p className="card-text"><small className="text-muted">Added on {' '}{date.substring(0, 10)}</small></p>

                    </div>
                </div>
            </div>



            {/* for edit note  */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Your Note</h5>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>

                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="name" className="form-control" id="title" name='title'
                                        aria-describedby="emailHelp" value={currentNote.title} onChange={onChange} />

                                </div>


                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="email" className="form-control" id="ta" name='tag' aria-describedby="emailHelp" value={currentNote.tag} onChange={onChange} />

                                </div>
                                <label htmlFor="description">Description</label>
                                <div className="form-floating mb-3">

                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name='description' style={{ height: "100px" }} value={currentNote.description} onChange={onChange}></textarea>

                                </div>



                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={saveChanges}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
