import { PostInput } from "@/schemas/post"
import { FieldErrors, UseFormRegister } from "react-hook-form"

type FormElementProps = {
  label: "title" | "excerpt" | "content"
  register: UseFormRegister<PostInput>
  inputType: "text" | "textarea"
  errors: FieldErrors<PostInput>
  title: string
}

export const FormElement = ({
  label,
  register,
  inputType,
  errors,
  title,
}: FormElementProps) => (
  <div className="mb-4">
    <label htmlFor={label} className="block text-gray-700 font-bold mb-2">
      {title}
    </label>
    {inputType === "text" ? (
      <input
        {...register(label)}
        type="text"
        id={label}
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
      />
    ) : (
      <textarea
        {...register(label)}
        id={label}
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        rows={3}
      />
    )}
    {errors[label] && (
      <p className="text-red-500 text-sm mt-1">{errors[label]?.message}</p>
    )}
  </div>
)
