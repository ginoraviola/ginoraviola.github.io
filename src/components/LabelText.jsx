const LabelText = ({ text }) => (
  <div className="bg-black p-2 rounded-lg shadow-2xl">
    <p className="text-white font-bold text-xs line-clamp-1">
      {text}
    </p>
  </div>
);

export default LabelText;