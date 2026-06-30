import { useNavigate } from "react-router-dom";
import type { Platform, UserProfileSummary } from "@/types";
import { VerifiedBadge } from "./VerifiedBadge";
import { useSelectedProfilesStore } from "@/store/useSelectedProfilesStore";
 

interface ProfileCardProps {
  profile: UserProfileSummary;
  platform: Platform;
  searchQuery: string;
  onProfileClick?: (username: string) => void;
}

function formatFollowersLocal(count: number) {
  if (count >= 1000000) return (count / 1000000).toFixed(1) + "M followers";
  if (count >= 1000) return (count / 1000).toFixed(0) + "K followers";
  return count + " followers";
}

export function ProfileCard({
  profile,
  platform,
  searchQuery,
  onProfileClick,
}: ProfileCardProps) {
  const navigate = useNavigate();

    const addProfile = useSelectedProfilesStore(
      (state) => state.addProfile
    );

    const isSelected = useSelectedProfilesStore((state) =>
      state.isSelected(profile.user_id)
    );

  const handleClick = () => {
    if (onProfileClick) onProfileClick(profile.username);
    navigate(`/profile/${profile.username}?platform=${platform}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer mb-3 w-full"
      data-search={searchQuery}
    >
      <img
        src={profile.picture}
        alt={profile.fullname}
        className="w-14 h-14 rounded-full object-cover border"
      />
      <div className="text-left flex-1">
        <div className="font-semibold text-gray-900 flex items-center gap-1">
          @{profile.username}
          <VerifiedBadge verified={profile.is_verified} />
        </div>
        <div className="text-sm text-gray-500">{profile.fullname}</div>
        <div className="text-sm text-gray-700 mt-1">{formatFollowersLocal(profile.followers)}</div>
      </div>
      {/* TODO: candidates must implement Add to List feature */}
      {/* TODO: candidates must implement Add to List feature */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          addProfile(profile);
        }}
        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
          isSelected
            ? "bg-green-100 text-green-700"
            : "bg-blue-600 text-white"
        }`}
      >
        {isSelected ? "Added" : "Add to List"}
      </button>
    </div>
  );
}
