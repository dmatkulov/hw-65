import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {ApiPages, Page} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";

const Pages = () => {
  const params = useParams() as {pageId: string};
  const [page, setPage] = useState<Page>();
  const [loading, setLoading] = useState(false);
  
  const fetchPages = useCallback(async () => {
    try {
      setLoading(true);
      const url = '/pages/' + params.pageId + '.json';
      
      const pageResponse = await axiosApi.get<ApiPages | null>(url);
      const pages = pageResponse.data;
      
      if (!pages) {
        return;
      } else {
        setPage({...pages, id: params.pageId} as Page);
      }
    } finally {
      setLoading(false);
    }
  }, [params.pageId]);
  
  useEffect(() => {
    void fetchPages();
  }, [fetchPages]);
  
  return page && (
    <div className="text-center">
      <div className="mt-5">
        {loading ? <Spinner/> : (
          <div>
            <h1 className="mb-5"
            >
              {page.title}
            </h1>
            <div>
              <p>{page.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pages;