import React from "react";
class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 50,
      title: "",
      body: "",
    };

    this.onChangeInputTitleHandler = this.onChangeInputTitleHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onChangeInputBodyHandler = this.onChangeInputBodyHandler.bind(this);
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  onChangeInputTitleHandler(event) {
    if (this.state.limit >= 0 && event.target.value.length <= 50) {
      this.setState(() => ({
        title: event.target.value,
        limit: 50 - event.target.value.length,
      }));
    }
  }

  onChangeInputBodyHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.limit}</p>

          <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." required="" value={this.state.title} onChange={this.onChangeInputTitleHandler} />

          <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." required="" onChange={this.onChangeInputBodyHandler}></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
