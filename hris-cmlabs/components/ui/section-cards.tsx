import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SectionCards() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card>
                <CardHeader>
                    <CardTitle>Card 1</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Content for card 1</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Card 2</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Content for card 2</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Card 3</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Content for card 3</p>
                </CardContent>
            </Card>
        </div>
    )
}
