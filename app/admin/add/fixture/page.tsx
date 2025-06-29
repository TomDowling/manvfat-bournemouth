import { FixtureForm } from "@/components/FixtureForm";

export default async function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Add a new fixture</h2>
                        <p className="text-gray-600">Select teams and date for the fixture</p>
                    </div>
                </div>

                <div>
                    <FixtureForm />
                </div>
            </main>
        </div>
    );
}
