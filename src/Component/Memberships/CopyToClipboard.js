import { CopyToClipboard } from "react-copy-to-clipboard";
import swal from "sweetalert";

function CopyClipboard() {
  return (
    <div className="App">
      <p></p>
      <CopyToClipboard
        text="http://some/example/binace/address/to/send/money"
        onCopy={() => swal("Copied to clipboard")}
      >
        <div className="btn btn-secondary">Copy to clipboard</div>
      </CopyToClipboard>
    </div>
  );
}

export default CopyClipboard;
