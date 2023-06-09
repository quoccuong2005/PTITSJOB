import { Editor } from "@tinymce/tinymce-react";
// import "./style.css";
import { uploadImage } from "../../api/uploadFile";

const TinyEditor = (props: {
	height?: number;
	value?: string;
	onChange: (value: string) => void;
	disabled?: boolean;
}) => {
	const { height, value, onChange, disabled } = props;

	const imageHandler = (callback: any) => {
		const input = document.createElement("input");
		// Tạo input file và click luôn
		input.setAttribute("type", "file");
		input.setAttribute("accept", "image/*");
		input.click();
		input.onchange = async function () {
			const file = input.files?.[0];
			if (!file) return;

			// Up ảnh lên và lấy url
			const response = await uploadImage({ file, filename: file.name, public: true });
			// Chèn ảnh vào dưới dạng url
			callback(response?.data?.data?.url ?? "", {
				alt: "image",
				uid: response?.data?.data,
				name: response?.data?.data?.file?.filename.split("/").pop().substring(26),
				status: "done",
			});
		};
	};

	return (
		<>
			<Editor
				apiKey='ihu6rlypska4k9h96g5x752rocpj133f20q41afy85shcrc5'
				value={value}
				// menubar={["file", "edit", "view", "insert", "format", "tools", "table", "help"]}
				plugins={[
					// 'advlist',
					"autolink",
					"lists",
					"link",
					"image",
					"charmap",
					"anchor",
					"searchreplace",
					"visualblocks",
					"code",
					"fullscreen",
					"insertdatetime",
					"media",
					"table",
					"preview",
					// 'help',
					"wordcount",
					"print",
					"paste",
					"importcss",
					// 'autosave',
					// 'save',
					"directionality",
					"visualchars",
					// 'template',
					// 'codesample',
					"hr",
					// 'pagebreak',
					"nonbreaking",
					// 'toc',
					"imagetools",
					"textpattern",
					"noneditable",
					"quickbars",
					"emoticons",
					// "editimage"
				]}
				disabled={disabled ?? false}
				init={{
					language_url: "/lang/vi_VN.js",
					language: "vi_VN",
					height: height ?? 500,
					menubar: "file edit view insert format tools table help",
					plugins: [
						// 'advlist',
						"autolink",
						"lists",
						"link",
						"image",
						"charmap",
						"anchor",
						"searchreplace",
						"visualblocks",
						"code",
						"fullscreen",
						"insertdatetime",
						"media",
						"table",
						"preview",
						// 'help',
						"wordcount",
						"print",
						"paste",
						"importcss",
						// 'autosave',
						// 'save',
						"directionality",
						"visualchars",
						// 'template',
						// 'codesample',
						"hr",
						// 'pagebreak',
						"nonbreaking",
						// 'toc',
						"imagetools",
						"textpattern",
						"noneditable",
						"quickbars",
						"emoticons",
						// "editimage"
					],
					toolbar:
						"undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
					// toolbar_sticky: true,
					autosave_ask_before_unload: true,
					image_advtab: true,
					image_caption: true,
					quickbars_selection_toolbar: "bold italic forecolor backcolor | quicklink h2 h3 blockquote",
					quickbars_insert_toolbar: false,
					noneditable_noneditable_class: "mceNonEditable",
					toolbar_mode: "sliding",
					// content_css: '//www.tinymce.com/css/codepen.min.css',
					contextmenu: "link image imagetools table",
					file_picker_callback: imageHandler,
					paste_data_images: true,
				}}
				onEditorChange={(text) => onChange(text)}
			/>
			<input id='my-file' type='file' name='my-file' style={{ display: "none" }} />
		</>
	);
};

export default TinyEditor;
