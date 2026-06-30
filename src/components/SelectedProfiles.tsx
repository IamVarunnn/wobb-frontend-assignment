import { useSelectedProfilesStore } from "@/store/useSelectedProfilesStore";

export function SelectedProfiles() {
  const selectedProfiles = useSelectedProfilesStore(
    (state) => state.selectedProfiles
  );

  const removeProfile = useSelectedProfilesStore(
    (state) => state.removeProfile
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sticky top-24">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Selected Profiles ({selectedProfiles.length})
        <p className="text-sm text-gray-500 mb-4">
            Saved influencers for your campaign
        </p>
      </h2>

      {selectedProfiles.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-6">
          No profiles selected
        </p>
      ) : (
        <div className="space-y-2">
          {selectedProfiles.map((profile) => (
            <div
              key={profile.user_id}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-3 hover:bg-gray-50 transition-colors"
            >
              <div>
                <p className="font-medium">
                  @{profile.username}
                </p>
                <p className="text-xs text-gray-500">
                  {profile.fullname}
                </p>
              </div>

              <button
                onClick={() =>
                  removeProfile(profile.user_id)
                }
                className="px-3 py-1.5 text-xs font-medium bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}