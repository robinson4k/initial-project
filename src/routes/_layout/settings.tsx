import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/settings")({
  component: SettingsComponent,
})

function SettingsComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <div className="bg-muted/50 rounded-xl p-6">
        <p>Settings content goes here...</p>
      </div>
    </div>
  )
}
