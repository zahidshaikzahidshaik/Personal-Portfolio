
const Contact = () => {
  return (
    <div className="max-w-lg mx-auto mt-24 px-4">
      <h1 className="font-playfair text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-4">Feel free to reach out via the form below or connect on LinkedIn/GitHub!</p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-input px-3 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-input px-3 py-2 rounded"
        />
        <textarea
          placeholder="Your message"
          rows={4}
          className="w-full border border-input px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
      <div className="mt-6">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mr-4"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
