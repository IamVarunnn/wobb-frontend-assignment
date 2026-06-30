import { useSelectedProfilesStore } from "@/store/useSelectedProfilesStore";

export function SelectedProfiles() {
  const selectedProfiles = useSelectedProfilesStore(
    (state) => state.selectedProfiles
  );

  const removeProfile = useSelectedProfilesStore(
    (state) => state.removeProfile
  );

  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="font-semibold text-lg mb-3">
        Selected Profiles ({selectedProfiles.length})
      </h2>

      {selectedProfiles.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No profiles selected
        </p>
      ) : (
        <div className="space-y-2">
          {selectedProfiles.map((profile) => (
            <div
              key={profile.user_id}
              className="flex items-center justify-between border rounded p-2"
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
                className="px-2 py-1 text-sm bg-red-500 text-white rounded"
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