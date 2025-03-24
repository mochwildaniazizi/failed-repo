import { Button } from "@/components/ui/button"

export function SiteHeader() {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-lg font-bold">Dashboard</h1>
            <Button variant="outline">Sign Out</Button>
        </header>
    )
}
