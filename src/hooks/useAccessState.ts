import type { AccessState, ProductFilter } from "../types";
import { useLocalStorage } from "./useLocalStorage";

const STORAGE_KEY = "wellness-mvp-state-v1";

export const defaultAccessState: AccessState = {
  onboardingCompleted: false,
  demoAccess: true,
  fullAccess: false,
  completedLessonIds: [],
  completedMaterialIds: [],
  serviceRequests: [],
  activeProductFilter: "all",
};

export function useAccessState() {
  const [state, setState] = useLocalStorage<AccessState>(STORAGE_KEY, defaultAccessState);

  const completeOnboarding = () => {
    setState((current) => ({ ...current, onboardingCompleted: true }));
  };

  const purchaseFullAccess = () => {
    setState((current) => ({ ...current, fullAccess: true }));
  };

  const completeLesson = (id: string) => {
    setState((current) => ({
      ...current,
      completedLessonIds: current.completedLessonIds.includes(id)
        ? current.completedLessonIds
        : [...current.completedLessonIds, id],
    }));
  };

  const completeMaterial = (id: string) => {
    setState((current) => ({
      ...current,
      completedMaterialIds: current.completedMaterialIds.includes(id)
        ? current.completedMaterialIds
        : [...current.completedMaterialIds, id],
    }));
  };

  const requestService = (id: string) => {
    setState((current) => ({
      ...current,
      serviceRequests: current.serviceRequests.includes(id)
        ? current.serviceRequests
        : [...current.serviceRequests, id],
    }));
  };

  const setProductFilter = (activeProductFilter: ProductFilter) => {
    setState((current) => ({ ...current, activeProductFilter }));
  };

  const resetDemoState = () => {
    setState(defaultAccessState);
  };

  return {
    state,
    completeOnboarding,
    purchaseFullAccess,
    completeLesson,
    completeMaterial,
    requestService,
    setProductFilter,
    resetDemoState,
  };
}
