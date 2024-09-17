import { NavLinks } from "@/app/ui/dashboard/nav-links";

export default function SideNav() {
    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white">
            <div className="px-4 py-6">
                <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                SIMPLE POS
                </span>

                <ul className="mt-6 space-y-1">
                    <NavLinks />
                </ul>
            </div>
            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a href="https://github.com/aldisypu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                <div>
                    <p className="text-xs text-gray-500 hover:text-gray-700">
                    <strong className="block font-medium">Built with Love by github.com/aldisypu.</strong>
                    </p>
                </div>
                </a>
            </div>
        </div>
    )
}