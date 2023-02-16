import EditStrainsForm from "../EditStrainsForm";

function Edit() {
  return (
    <div className="edit">
      <div className="editStrains">
      <span className="editStrainsHdg">Edit This Strain</span> <br/><br/>

      <EditStrainsForm />
      </div>
    </div>
  );
}

export default Edit;
